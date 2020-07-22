import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import { Row, Col, Divider } from 'antd';


export default function Simple() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  function handleOnChange(newEditorState: EditorState) {
    setEditorState(newEditorState);
  }
  
  return (
    <Row gutter={30}>
      <Col span={12}>
        <Divider orientation="left">Editor</Divider>

        {/* Controlled Contenteditable */}
        <div className="editor">
          <Editor
            editorState={editorState}
            onChange={handleOnChange}
          />
        </div>

      </Col>
    </Row>
  );
}