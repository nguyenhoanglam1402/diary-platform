import React, { useState } from "react";
import "../App.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const EditorComponent = () => {
    const [para, upload] = useState("");
    const handleChange = (e, editor) => {
        const data = editor.getData();
        upload(data);
        console.log(data);
    }

    return (
        <div className="editor-panel">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script"/>
            <div className="editor-title">
                <h1 className="novel-title">Create works</h1>
                <input type="text" placeholder="Enter the title of your story here"/>
            </div>
            <div>
                <CKEditor
                    className="editor"
                    editor={ClassicEditor}
                    onChange={
                        handleChange
                    }
                    data={para} />
            </div>
            <div className="submit-block">
                <button className="submit-btn" type="submit">Post</button>
            </div>
        </div>
    );
};

export default EditorComponent;