import React, { useState } from 'react';
import Draft, { Editor, EditorState } from 'draft-js';
import { Row, Col, Divider } from 'antd';

export function getJsonString(editorState: EditorState) {
  const contentState = editorState.getCurrentContent();
  const rawJson = Draft.convertToRaw(contentState); // This is important
  const jsonStr = JSON.stringify(rawJson, null, 1);
  const plainText = contentState.getPlainText();

  return {
    jsonStr,
    plainText
  };
}

export default function ContentState() {

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  function handleOnChange(newEditorState: EditorState) {
    setEditorState(newEditorState);
  }

  const { jsonStr, plainText } = getJsonString(editorState);
  return (
    <Row gutter={30}>
      <Col span={24}>
        <h1>Content state</h1>
        <p>The ContentState object represents</p>
        <ul>
          <li>text in an array of blocks.</li>
          <li>Entities (metadata that accompanies some text)</li>
        </ul>
        <p>In this sample you can observe what happens when you type some text. The resulting JSON can be stored in a database to recreate the ContentState at a later stage The content within a ContentState can be retrieved as follows:</p>
      </Col>
      <Col span={12}>

        <Divider orientation="left">Editor</Divider>

        <div className="editor">
          <Editor
            editorState={editorState}
            onChange={handleOnChange}
          />
        </div>

        <Divider orientation="left">Plaintext retrieve from contentState</Divider>
        <p>{plainText}</p>

      </Col>

      <Col span={12}>
        <Divider orientation="left">Json View</Divider>
        <pre>{jsonStr}</pre>
      </Col>

    </Row>
  );
}