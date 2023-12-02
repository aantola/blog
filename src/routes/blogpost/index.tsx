import MDEditor from '@uiw/react-md-editor';


/*

<MDEditor
        value={value}
        onChange={setValue}
      />
*/
export default function Blogpost(){

    return (
        
        <MDEditor.Markdown source={"**Hello world!!!**"} style={{ whiteSpace: 'pre-wrap' }} />
        
    );
}