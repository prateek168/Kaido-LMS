import { type Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import { cn } from "@/lib/utils";

interface iAppProps {
  editor: Editor | null;
}

export function Menubar({ editor }: iAppProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-border p-2">
      <TooltipProvider>
        <div className="flex items-center gap-1">
          {/* Bold */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleBold().run()
                }
                size="sm"
                pressed={editor.isActive("bold")}
                className={cn(
                  editor.isActive("bold") && "bg-muted text-muted-foreground"
                )}
              >
                <Bold className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          {/* Italic */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleItalic().run()
                }
                size="sm"
                pressed={editor.isActive("italic")}
                className={cn(
                  editor.isActive("italic") && "bg-muted text-muted-foreground"
                )}
              >
                <Italic className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          {/* Strike */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleStrike().run()
                }
                size="sm"
                pressed={editor.isActive("strike")}
                className={cn(
                  editor.isActive("strike") && "bg-muted text-muted-foreground"
                )}
              >
                <Strikethrough className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Strikethrough</TooltipContent>
          </Tooltip>
          {/* Separator */}
          <div className="w-px h-6 bg-border mx-1" />
          {/* Heading 1 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                size="sm"
                pressed={editor.isActive("heading", { level: 1 })}
                className={cn(
                  editor.isActive("heading", { level: 1 }) &&
                    "bg-muted text-muted-foreground"
                )}
              >
                <Heading1 className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 1</TooltipContent>
          </Tooltip>
          {/* Heading 2 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                size="sm"
                pressed={editor.isActive("heading", { level: 2 })}
                className={cn(
                  editor.isActive("heading", { level: 2 }) &&
                    "bg-muted text-muted-foreground"
                )}
              >
                <Heading2 className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 2</TooltipContent>
          </Tooltip>
          {/* Heading 3 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                size="sm"
                pressed={editor.isActive("heading", { level: 3 })}
                className={cn(
                  editor.isActive("heading", { level: 3 }) &&
                    "bg-muted text-muted-foreground"
                )}
              >
                <Heading3 className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 3</TooltipContent>
          </Tooltip>
          {/* Separator */}
          <div className="w-px h-6 bg-border mx-1" />
          {/* Bullet List */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                onPressedChange={() =>
                  editor.chain().focus().toggleBulletList().run()
                }
                size="sm"
                pressed={editor.isActive("bulletList")}
                className={cn(
                  editor.isActive("bulletList") &&
                    "bg-muted text-muted-foreground"
                )}
              >
                <List className="h-4 w-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>
          sperator left, right , center , button for undo and redo
        </div>
      </TooltipProvider>
    </div>
  );
}
