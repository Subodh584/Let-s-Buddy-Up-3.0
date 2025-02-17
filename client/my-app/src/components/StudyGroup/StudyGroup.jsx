import React from "react";
import { studyGroupData } from "./StudyGroupData";
import StudyGroupBox from "./StudyGroupBox";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";
import { TimeControlledScroll } from "../Effects";
export default function StudyGroup() {
  const StudyGroupList = studyGroupData.map((box) => (
    <StudyGroupBox
      key={box.key}
      imgsrc={box.imgsrc}
      name={box.name}
      year={box.year}
    />
  ));
  return <>
  <TimeControlledScroll position={0} time={800} />
  <Header/>
  <SubHeading name={'Study Groups'}/>
  <section class="teachers">
  {StudyGroupList}
  </section>
  <Footer/>
  </>;
}
