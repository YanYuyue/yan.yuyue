import { HtmlStyledTag, styled } from "@linaria/react";
import { mediaQueryMaxWidth, mediaQueryMinWidth } from "../../utils/style";

import photo from '../../assets/photo.jpg?url';
import { FC, ImgHTMLAttributes, JSX } from "react";

import { IoLocation } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { css } from "@linaria/core";

const PhotoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  align-items: stretch;

  ${mediaQueryMaxWidth('md')} {
    flex-direction: row;
    margin-right: 0;
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 40px;
  background-color: var(--gray-6);

  margin-bottom: 16px;

  ${mediaQueryMaxWidth('md')} {
    margin-right: 16px;
    margin-bottom: 0;
    width: 240px;
    height: 240px;
  }

  ${mediaQueryMaxWidth('sm')} {
    width: 200px;
    height: 200px;
  }
  
` as FC<ImgHTMLAttributes<HTMLImageElement>>;


const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  justify-items: start;
  align-items: center;
`

export const PhotoBox = () => {
  return <PhotoBoxContainer>
    <Photo src={photo} />
    <div>
    <div className={css`
      font-size: xx-large;
      padding-bottom: 0.5em;
    `}>YAN, Yuyue</div>
    <InfoBox>
      <IoLocation />
      <span>1</span>
      <FaUniversity />
      <span>2</span>
      <IoMail />
      <span>3</span>
    </InfoBox>
    </div>
  </PhotoBoxContainer>
};