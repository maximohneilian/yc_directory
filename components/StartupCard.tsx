import React from 'react'
import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export const StartupCard = ({post}: { post: StartupTypeCard }) => {
  const {_id, author: {_id : authorId, name}, views, description, _createdAt, title, image, category } = post;


  return (
      <li className="startup-card group">
        <div className="flex-between">
          <p className={"startup_card_date"}>{formatDate(_createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary"/>
            <span className="text-16-medium">{views}</span>
          </div>
        </div>

        <div className="flex-between mt-6 gap-5">
          <div className="flex-1">
            <Link href={`/user/${authorId}`}>
              <p className="text-16-medium line-clamp-1">{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/user/${authorId}`}>
            <Image src="https://placehold.co/48x48" alt={"Avatar"} width={48} height={48} className="rounded-full"/>
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">
            {description}
          </p>
          <img src={image} alt={"placeholder"} className="startup-card_img"/>
        </Link>

        <div className="flex-between mt-5 gap-3">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </li>
  )
}
