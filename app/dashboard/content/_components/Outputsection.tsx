import React, { use, useRef,useEffect } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
    output:string;
}
function Outputsection({output}:PROPS) {
    const editorRef:any=useRef();
  
    useEffect(() => {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(output);
    }, [output])
    
  return (


    <div className='bg-white rounded-lg border '>
        <div className='flex justify-between items-center p-2 shadow-md '>
            <h2 className='text-lg font-semibold mx-4'>Your Result</h2>
            <Button className='mx-4 p-1 hover:cursor-pointer' onClick={()=>navigator.clipboard.writeText(output)}><Copy className='h-4 w-4'/> Copy</Button>
        </div>
       <Editor
       ref={editorRef}
    initialValue="Your result will be displayed here"
    previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>{console.log(editorRef.current.getInstance().getMarkdown())}}
  />

    </div>
  )
}

export default Outputsection