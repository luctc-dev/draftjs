import React, { useState } from 'react';
import Draft, { Editor, EditorState } from 'draft-js';
import { Row, Col, Divider } from 'antd';
import draftToHtml from 'draftjs-to-html';

const regexStratergy = (block: Draft.ContentBlock, callback: (start: number, end: number) => void) => {
  const text = block.getText();
  let result: RegExpExecArray;
  let regex = /(^|\s)#\w+/g;

  // Lorem ipsum #hashtag1 Lorem ipsum #hashtag2
  while ((result = regex.exec(text) as RegExpExecArray) != null) {
    let start = result.index === 0 ? 0 : result.index + 1;
    let end = start === 0 ? start + result[0].length : start + result[0].length - 1;
    callback(start, end);
  }
};

const regexComponent = (props: any) => {
  return (
    <span style={{ backgroundColor: "#dce6f8" }}>{props.children}</span>
  )
}

const compositeDecorator = new Draft.CompositeDecorator([
  {
    strategy: regexStratergy,
    component: regexComponent
  }
]);

export default function HashTags() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(compositeDecorator)
  );

  function handleOnChange(newEditorState: EditorState) {
    setEditorState(newEditorState);
  }
  
  function getPreviewHTML() {
    const rawContentState = Draft.convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(
      rawContentState, 
      {
        trigger: '#',
        separator: ' ',
      }
    );
    return markup;
  }

  return (
    <Row gutter={30}>
      <Col span={24}>
        <h1>use #tag regex to find matches</h1>
      </Col>
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

      <Col span={12}>
        <Divider orientation="left">Preview</Divider>
        <div className="preview" dangerouslySetInnerHTML={{
          __html: getPreviewHTML()
        }}/>
      </Col>
    </Row>
  );
}