"use client"

import { useState, useEffect } from "react"

import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { RightSheet } from "../../components/ui/RightSheet"
import { Combobox } from "../../components/ui/ComboBox"
import { Modal } from "../../components/ui/Dialog"
import { Carousel } from "../../components/ui/Carousel"

export default function Page() {

    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const html = document.documentElement
        if (isDark) {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
    }, [isDark])

    // COURSES
    const [courseOpen, setCourseOpen] = useState(false)

    const [course, setCourse] = useState("")
    const courses = [
        { value: "calc", label: "Calculus I" },
        { value: "physics", label: "Physics I" },
        { value: "cs", label: "Computer Science" },
        { value: "cs_intro", label: "Introduction to Computer Science" },
        { value: "cs_data_structures", label: "Data Structures & Algorithms" },
        { value: "cs_oop", label: "Object-Oriented Programming" },
        { value: "cs_web", label: "Web Development Basics" },
        { value: "eng_tech", label: "Technical Writing" },
        { value: "eng_communication", label: "Effective Communication" },
        { value: "bio_intro", label: "Introduction to Biology" },
        { value: "chem_general", label: "General Chemistry" },
        { value: "econ_micro", label: "Microeconomics" },
        { value: "econ_macro", label: "Macroeconomics" }
    ]

    // DIALOG
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-6xl px-6 py-10 space-y-10">

                {/* HEADER */}
                <header className="header rounded-2xl border p-8 shadow-sm">
                    <h1 className="text-4xl font-bold tracking-tight"> Component Playground </h1>
                    <p className="mt-2 text-foreground/70"> Explore, test, and compare UI components in isolation. </p>
                </header>

                {/* BUTTONS SECTION */}
                <section className="section rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Buttons </h2>
                        <p className="text-sm text-foreground/60"> Variants, states, and interactions </p>
                    </div>

                    <div className="p-6 flex flex-wrap gap-4">
                        <Button onClick={() => alert("Primary Clicked")}> Primary Button </Button>
                        <Button variant="secondary"> Secondary Button </Button>
                        <Button onClick={() => setIsDark(!isDark)}>
                            {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        </Button>
                    </div>
                </section>

                {/* CARDS SECTION */}
                <section className="section rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Layout Experiments </h2>
                        <p className="text-sm text-foreground/60"> Full-width components and advanced patterns </p>
                    </div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card
                            variant="muted"
                            clickable
                            title="Course Card"
                            description="Introduction to Next.js for beginners"
                            onClick={() => alert("Course clicked")}
                        />
                        <Card
                            variant="muted"
                            title="Quiz Module"
                            description="Test your knowledge with interactive quizzes"
                        />
                        <Card
                            variant="muted"
                            clickable
                            className="overflow-hidden border-4 border-green-800 p-0"
                        >
                            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/bg/sample_bg1.jpg')" }} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-lg font-semibold"> Calculus I </h3>

                                <p className="text-sm text-foreground/70"> Limits, derivatives, and real-world applications of change. </p>

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xs text-muted-foreground"> 12 Lessons </span>
                                    <span className="text-xs font-medium text-primary"> Enrolled </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* SHEET SECTION */}
                <section className="section rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Sheet / Drawer </h2>
                        <p className="text-sm text-foreground/60"> Right-side panel interaction pattern </p>
                    </div>

                    <div className="p-6">
                        <Button onClick={() => setCourseOpen(true)}> Open Calculus Sheet </Button>
                    </div>
                </section>
                <RightSheet
                    open={courseOpen}
                    onOpenChange={setCourseOpen}
                    title="Calculus I"
                    footer={
                        <>
                            <Button 
                                variant="secondary" 
                                onClick={() => setCourseOpen(false)}
                            > 
                                Cancel 
                            </Button>
                            <Button onClick={() => alert("Enrolled!")}> Enroll </Button>
                        </>
                    }
                >
                    <div className="space-y-3">
                        <p className="text-sm text-foreground/70"> Limits, derivatives, and real-world applications of change. </p>

                        <Button
                            variant="secondary"
                            onClick={() => setCourseOpen(false)}
                        >
                            Close
                        </Button>
                    </div>
                </RightSheet>

                {/* COMBO BOX SECTION */}
                <section className="section rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Combo Box </h2>
                        <p className="text-sm text-foreground/60"> Full-width components and advanced patterns </p>
                    </div>

                    <div className="p-6 space-y-4 max-w-md">
                        <Combobox
                            options={courses}
                            value={course}
                            onChange={setCourse}
                            maxHeight={150}
                            placeholder="Select a course"
                        />

                        {course && (
                        <p className="text-sm text-muted-foreground">
                            Selected: <span className="font-medium">{course}</span>
                        </p>
                        )}
                    </div>
                </section>

                {/* DIALOG SECTION */}
                <section className="setion rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Dialog </h2>
                        <p className="text-sm text-foreground/60"> Centered Dialog Interaction Pattern </p>
                    </div>

                    <div className="p-6">
                        <Button onClick={() => setDialogOpen(true)}> Open Dialog </Button>
                    </div>
                </section>
                <Modal
                    open={dialogOpen}
                    onOpenChange={setDialogOpen}
                    title="Sample Dialog Title"
                    description="This is a sample dialog description to demonstrate the component."
                    footer={
                    <>
                        <Button variant="secondary" onClick={() => setDialogOpen(false)}> Cancel </Button>
                        <Button onClick={() => alert("Saved!")}> Save changes </Button>
                    </>
                    }
                >
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-muted-foreground"> Name </p>
                            <input
                                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                                defaultValue="Pedro Duarte"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground"> Username </p>
                            <input
                                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                                defaultValue="@peduarte"
                            />
                        </div>
                    </div>
                </Modal>

                {/* CAROUSEL SECTION */}
                <section className="section rounded-2xl border shadow-sm overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/20">
                        <h2 className="text-lg font-semibold"> Carousel </h2>
                        <p className="text-sm text-foreground/60"> Horizontal scroll interaction pattern </p>
                    </div>

                    <div className="p-6 space-y-10">
                        <Carousel
                            className="w-full max-w-xs"
                            itemsPerView={2}
                            items={Array.from({ length: 5 })}
                            renderItem={(_, index) => (
                                <div className="p-1">
                                    <div className="aspect-square rounded-xl border bg-muted flex items-center justify-center shadow-sm">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </div>
                                </div>
                            )}
                        />
                        <Carousel
                            className="w-full max-w-xs"
                            itemsPerView={3}
                            items={Array.from({ length: 10 })}
                            renderItem={(_, index) => (
                                <div className="p-1">
                                    <div className="aspect-square rounded-xl border bg-muted flex items-center justify-center shadow-sm">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}