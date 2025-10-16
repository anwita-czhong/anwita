'use client';

import ReactMarkdown from "react-markdown";
import remarkSuperSub from "remark-supersub";
import styles from "./Pipeline.module.scss";
import he from "he";
import Image from "next/image";
import React, { Fragment } from "react";

export interface Partner {
  name: string;
  logoImageData?: {
    url: string;
    width: number;
    height: number;
  }
}

export interface Program {
  name: string;
  description: string;
  target: string;
  indication: string;
  progress: number;
  label?: string;
  partner?: Partner;
}

export interface ProgramGroup {
  name: string;
  programs: Program[];
}

const Program: React.FC<{
  program: Program,
  isOpen: boolean,
  onClick: (event: React.MouseEvent) => void,
  closeDetails: () => void,
}> = ({ program, isOpen, onClick, closeDetails }) => {
  return (
    <div className={styles.pipelines__row} key={program.name}>
      <div className={((program.target && program.indication) ? "" : styles["pipelines__row__name--no-info"]) + " pl-1"} style={{ overflow: (program.description ? "visible" : "hidden") }}>
        <p><span className={styles.program__name}>{he.decode(program.name)}</span></p>
      </div>

      <div style={{ borderLeft: "1px dashed gray", display: program.target ? "" : "none" }}>
        <p>{he.decode(program.target || "")}</p>
      </div>

      <div style={{ borderLeft: "1px dashed gray", display: program.indication ? "" : "none" }}>
        <p>{he.decode(program.indication || "")}</p>
      </div>

      <div className={styles["pipelines__row__progress-area"]}>
        <div className={
          styles["pipelines__row__progress-bar"]
          + " " + styles[`pipelines__row__progress-bar__${Math.min(Math.max(1, Math.round(program.progress * 100)), 100)}`]
        }>
          <div className={
            styles["pipelines__row__progress-bar__inner"]
          }>
            <div className={styles["pipelines__row__progress-bar__inner__fill"]}></div>
            <svg viewBox="0 0 50 100" preserveAspectRatio="none">
              <polygon points="0,0 50,50 0,100" />
            </svg>
            {program.label && <div className={styles["pipelines__row__progress-bar__label"]}>
              <b>{program.label}</b>
            </div>}
          </div>
          {program.partner && <div className={styles["pipelines__row__progress-bar__partner-logo"]}>
            { /* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              width={program.partner.logoImageData?.width}
              height={program.partner.logoImageData?.height}
              src={program.partner.logoImageData?.url || ""}
              alt={program.partner.name + " Logo"}
            />
          </div>}
        </div>

        <div className={styles["pipelines__row__progress-area__markers"]}>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

const Pipelines: React.FC<{
  programGroups: ProgramGroup[]
}> = ({ programGroups }) => {
  const [openProgram, setOpenProgram] = React.useState<string | null>(null);

  const closeDetails = () => {
    setOpenProgram(null);
  };

  const handleDetailsClick = (event: React.MouseEvent, programName: string) => {
    event.preventDefault();
    if (openProgram === programName) {
      closeDetails();
    } else {
      setOpenProgram(programName);
    }
  };

  const pipelines = programGroups.map((programGroup) => (
    <Fragment key={programGroup.name}>
      <div className={styles.pipelines__row}>
        <p className="p-2"><i>{programGroup.name}</i></p>
        <div style={{ borderLeft: "1px dashed gray" }}>&nbsp;</div>
        <div style={{ borderLeft: "1px dashed gray" }}>&nbsp;</div>
        <div className={styles["pipelines__row__progress-area"]}>
          <div className={styles["pipelines__row__progress-area__markers"]}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
      {programGroup.programs.map((program) => (
        <Program
          key={program.name}
          program={program}
          isOpen={openProgram === program.name}
          onClick={(event) => handleDetailsClick(event, program.name)}
          closeDetails={closeDetails}
        />
      ))}
      <div className={`${styles.pipelines__row} height-4`}>
        <div></div>
        <div style={{ borderLeft: "1px dashed gray" }}>&nbsp;</div>
        <div style={{ borderLeft: "1px dashed gray" }}>&nbsp;</div>
        <div className={styles["pipelines__row__progress-area"]}>
          <div className={styles["pipelines__row__progress-area__markers"]}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <div className={styles.pipelines} data-role="pipeline-display">
      <div className={`${styles.pipelines__row} ${styles["pipelines__row--headers"]} ${styles["pipelines__row--center"]}`}>
        <div>
          <p><b>Program</b></p>
        </div>
        <div>
          <p><b>MOA</b></p>
        </div>
        <div>
          <p><b>Patient Population</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Pre&shy;clinical</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Lead ID</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Lead OP</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>IND Enabling</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Phase 1</b></p>
        </div>
      </div>

      {pipelines}
    </div>
  );
}

export default Pipelines;
