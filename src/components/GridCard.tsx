"use client";
import { latoItalic } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type GridCardProps = {
  gridArea: string;
  image: string;
  placeHolder: string;
};

const GridCard = ({ gridArea, image, placeHolder }: GridCardProps) => {
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
                <Link className="content-link" href="/home">
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
      <button
        onClick={async () => {
          const response = await fetch("http://localhost:3000/api/send", {
            method: "POST",
          });
          const data = await response.json();
          console.log(data);
        }}
      >
        Send email
      </button>
    </div>
  );
};

export default GridCard;
