import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SectionBulletsProps {
  bullets?: string[] | JSX.Element[];
  textDir: string;
  margin: string;
  customBulletIcon?: boolean;
  icon?: IconProp;
}

const SectionBullets = ({
  bullets,
  customBulletIcon,
  textDir,
  margin,
  icon,
}: SectionBulletsProps) => {
  return (
    <ul
      className={`mt-12 mb-6 list-none ${textDir} text-xl flex flex-col gap-3`}
    >
      {bullets?.map((item, index) => (
        <li key={index} className="flex">
          {!customBulletIcon ? (
            <FontAwesomeIcon
              icon={faCarSide}
              className={`mt-1 ${margin} text-orange-primary w-6`}
              size="sm"
            />
          ) : (
            icon && (
              <FontAwesomeIcon
                icon={icon}
                className={`${margin} text-orange-primary w-6`}
                size="sm"
              />
            )
          )}
          <div className="inline-block">
            {typeof item === "string"
              ? item.split("\n").map((str, index) => (
                <p className="mt-0 mb-5 text-xl" key={index}>
                  {str}
                </p>
              ))
              : item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SectionBullets;
