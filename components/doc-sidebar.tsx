"use client"

import { useState } from "react"
import { BookOpen, ChevronRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DocSidebarProps {
  onNavClick: (sectionId: string) => void
}

export function DocSidebar({ onNavClick }: DocSidebarProps) {
  const [open, setOpen] = useState(false)

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "installation", title: "Installation" },
    { id: "database-setup", title: "Database Setup" },
    { id: "java-implementation", title: "Java Implementation" },
    { id: "compilation", title: "Compilation & Execution" },
    { id: "submission", title: "Submission Requirements" },
  ]

  const NavItems = () => (
    <div className="space-y-1">
      {sections.map((section) => (
        <Button
          key={section.id}
          variant="ghost"
          className="w-full justify-start text-left"
          onClick={() => {
            onNavClick(section.id)
            setOpen(false)
          }}
        >
          <ChevronRight className="mr-2 h-4 w-4" />
          {section.title}
        </Button>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Documentation</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <NavItems />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 border-r shrink-0 h-screen sticky top-0 overflow-y-auto bg-background">
        <div className="flex items-center gap-2 p-6 border-b">
          <BookOpen className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Documentation</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] p-4">
          <NavItems />
        </ScrollArea>
      </div>
    </>
  )
}

