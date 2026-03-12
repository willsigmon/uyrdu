"use client";

import { useState } from "react";
import { NominationForm, NominationTrigger } from "./nomination-form";

export function StorySection() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <NominationForm />;
  }

  return <NominationTrigger onOpen={() => setShowForm(true)} />;
}
