import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({ blogDetails, setBlogDetails }) {
  const [value, setValue] = useState(blogDetails.content || '');

  useEffect(() => {
    setValue(blogDetails.content || '');
  }, [blogDetails.content]);

  const handleEditorChange = (content, editor) => {
    setValue(content);
    setBlogDetails({ ...blogDetails, content });
  };

  return (
    <Editor
      apiKey='v1kq8v1jrl8vc57zhfs8cnqxs75qk035i3rb16h4apzbee05'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        height: 800,
      }}
      value={value}
      onEditorChange={handleEditorChange}
    />
  );
}
