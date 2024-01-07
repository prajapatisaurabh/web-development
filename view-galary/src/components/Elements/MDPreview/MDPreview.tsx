import createDOMPurify from "dompurify";

const DOMPurify = createDOMPurify(window);

export type MDPreviewProps = {
  value: string;
};

// check markdown
export const MDPreview = ({ value = "" }: MDPreviewProps) => {
  return (
    <div
      className="p-2 w-full prose prose-indigo"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(value),
      }}
    />
  );
};
