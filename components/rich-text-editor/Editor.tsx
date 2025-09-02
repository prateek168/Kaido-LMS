"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import { Menubar } from "./Menubar";

export function RichTextEditor({ field }: { field: any }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable default Strike from StarterKit to use custom one
        strike: false,
        // Disable default Heading from StarterKit to use custom one
        heading: false,
        // Disable default lists from StarterKit to use custom ones
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      Strike,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "my-custom-bullet-list",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "my-custom-ordered-list",
        },
      }),
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4 !w-full !max-w-none  ",
      },
    },
    onUpdate: ({ editor }) => {
      field.onChange(JSON.stringify(editor.getJSON()));
    },
    content: field.value ? JSON.parse(field.value) : "<p> Hello World  🚀<p>",
  });

  if (!editor) return null;

  return (
    <div className="w-full border border-input rounded-lg overflow-hidden dark:bg-input/30">
      <Menubar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[200px] prose dark:prose-invert max-w-none"
      />
    </div>
  );
}
