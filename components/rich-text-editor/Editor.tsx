"use client";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import { Menubar } from "./Menubar";
export function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Strike,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList,
    ],
    immediatelyRender: false,
  });
  if (!editor) return null;
  return (
    <div>
      <Menubar editor={editor} />
    </div>
  );
}
