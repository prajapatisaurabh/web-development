import { discussionGenerator } from '@/test/data-generators';
import { renderApp, screen, userEvent, waitFor, within } from '@/test/test-utils';
import { formatDate } from '@/utils/format';

import { Discussions } from '../Discussions';

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as any).mockRestore();
});

test('should create, render and delete discussions', async () => {
  await renderApp(<Discussions />);

  const newDiscussion = discussionGenerator();

  expect(await screen.findByText(/no entries/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /create discussion/i }));

  const drawer = screen.getByRole('dialog', {
    name: /create discussion/i,
  });

  const titleField = within(drawer).getByText(/title/i);
  const bodyField = within(drawer).getByText(/body/i);

  await userEvent.type(titleField, newDiscussion.title);
  await userEvent.type(bodyField, newDiscussion.body);

  const submitButton = within(drawer).getByRole('button', {
    name: /submit/i,
  });

  await userEvent.click(submitButton);

  await waitFor(() => expect(drawer).not.toBeInTheDocument());

  await waitFor(() => expect(screen.getByText(newDiscussion.title)).toBeInTheDocument());

  const row = screen.getByRole('row', {
    name: `${newDiscussion.title} ${formatDate(newDiscussion.createdAt)} View Delete Discussion`,
  });

  expect(
    within(row).getByRole('cell', {
      name: newDiscussion.title,
    })
  ).toBeInTheDocument();

  await userEvent.click(
    within(row).getByRole('button', {
      name: /delete discussion/i,
    })
  );

  const confirmationDialog = screen.getByRole('dialog', {
    name: /delete discussion/i,
  });

  const confirmationDeleteButton = within(confirmationDialog).getByRole('button', {
    name: /delete discussion/i,
  });

  await userEvent.click(confirmationDeleteButton);

  await screen.findByText(/discussion deleted/i);

  expect(
    within(row).queryByRole('cell', {
      name: newDiscussion.title,
    })
  ).not.toBeInTheDocument();
});
