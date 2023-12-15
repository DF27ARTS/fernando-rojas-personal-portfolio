"use client";
import { GridCardTypes } from "@/app/home/page";
import { latoItalic } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GridCard = ({ gridArea, image, placeHolder, target, url }: GridCardTypes) => {
  return (
    <div
      style={{ "--grid-area": gridArea } as React.CSSProperties}
      className="grid-card purple-300"
    >
      <span className="purple-400">
        <span className="purple-500">
          <span className="purple-600">
            <span className="purple-700">
              <span className="grid-card__content">
                <Link target={target} className="content-link" href={url}>
                  <Image
                    className="grid-card-image"
                    src={image}
                    alt="Grid content image"
                    height="800"
                    width="800"
                  />
                  <div className={`grid-card-title ${latoItalic.className}`}>
                    {placeHolder}
                  </div>
                </Link>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default GridCard;
