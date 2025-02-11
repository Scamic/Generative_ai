import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';


interface PROPS {
  aiOutput:string
}
function OutputSection({aiOutput}:PROPS) {
  // Properly type the ref for the Editor component
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance?.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className='bg-white shadow-lg border rounded-md'>
      <div className='flex justify-between items-center p-5 border-b-2'>
        <h2 className='text-lg font-medium'>Your Result</h2>
        <Button className='flex gap-2'>
          <Copy className='w-4 h-4'
          onClick={() => navigator.clipboard.writeText(aiOutput)}
          /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will Appear Here"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => {
          // Safely access the editor instance using optional chaining
          const markdown = editorRef.current?.getInstance().getMarkdown();
          console.log(markdown);
        }}
      />
    </div>
  );
}

export default OutputSection;