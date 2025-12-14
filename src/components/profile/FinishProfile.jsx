import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FollowProfileIcon from "@/components/icons/FollowProfileIcon";
import AddPhotoIcon from "@/components/icons/AddPhotoIcon";
import AddBioIcon from "@/components/icons/AddBioIcon";
import CreateIcon from "@/components/icons/CreateIcon";

const finishSteps = [
  {
    id: 1,
    icon: FollowProfileIcon,
    title: "Follow 10 profiles",
    description: "Fill your feed with threads that interest you.",
    actionText: "See profiles",
    action: () => console.log("Navigate to follow suggestions"),
  },
  {
    id: 2,
    icon: AddPhotoIcon,
    title: "Add profile photo",
    description: "Make it easier for people to recognize you.",
    actionText: "Add",
    action: () => console.log("Open upload photo dialog"),
  },
  {
    id: 3,
    icon: AddBioIcon,
    title: "Add bio",
    description: "Introduce yourself and tell people what you're into.",
    actionText: "Add",
    action: () => console.log("Open edit bio dialog"),
  },
  {
    id: 4,
    icon: CreateIcon,
    title: "Add links",
    description: "Share your other social profiles or website.",
    actionText: "Add",
    action: () => console.log("Open add links dialog"),
  },
];

export default function FinishProfile() {
  return (
    <div className="px-6 pt-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Finish your profile</h2>
        <span className="text-sm text-muted-foreground">
          {finishSteps.length - 1} left
        </span>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {finishSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <CarouselItem
                  key={step.id}
                  className="pl-1 md:pl-3 basis-full md:basis-1/3"
                >
                  <Card className="bg-accent border-0 p-0 rounded-2xl!">
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center mb-3">
                        <IconComponent width={20} height={20} />
                      </div>
                      <h3 className="font-semibold text-base">{step.title}</h3>
                      <p className="text-[13px] text-muted-foreground mb-2 flex-1">
                        {step.description}
                      </p>
                      <Button
                        onClick={step.action}
                        variant="default"
                        className="w-full rounded-xl font-semibold"
                      >
                        {step.actionText}
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4" />
        </Carousel>
      </div>
    </div>
  );
}
