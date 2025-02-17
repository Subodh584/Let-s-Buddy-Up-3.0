import React from "react";
import LanguageBox from "./LanguageBox";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";
import { TimeControlledScroll } from "../Effects";
import { LanguageData } from "./LanguageData";

export default function LanguageExchange() {
  const LanguageList = LanguageData.map((box) => (
    <LanguageBox
      key={box.key}
      imgsrc={box.imgsrc}
      start={box.start}
      detail={box.detail}
      description={box.description}
    />
  ));
  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name={"Language Excahange"} />
      <section className="blog">{LanguageList}</section>
      <Footer />
    </>
  );
}
