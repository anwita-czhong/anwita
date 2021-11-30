import styles from "./Pipeline.module.scss";

export default function Pipeline(props) {
  const pipelines = props.pipelines.map((pipeline) => {
    return (
      <div className={styles.pipelines__row} key={pipeline.name}>
        <div className={styles.hoverParent} style={{ gridColumn: (pipeline.target ? "" : "1 / 3"), overflow: (pipeline.description ? "visible" : "hidden") }}>
          <p>
            <b dangerouslySetInnerHTML={{ __html: pipeline.name }}></b>
          </p>
          { pipeline.description && <span className={styles.hoverParent__text}><p>{pipeline.description}</p></span> }
        </div>
        {pipeline.target &&
          <div style={{ borderLeft: "1px dashed gray" }}>
            <p>{pipeline.target}</p>
          </div>
        }
        <div className={styles["pipelines__row__progress-area"]}>
          <div className={
            styles["pipelines__row__progress-bar"]
            + " " + styles[`pipelines__row__progress-bar__${Math.round(pipeline.progress / 5) * 5}`]
            + " " + (pipeline.partnership ? styles[`pipelines__row__progress-bar--${pipeline.partnership}`] : "")
          }>
            <div className={styles["pipelines__row__progress-bar__fill"]}></div>
            <svg viewBox="0 0 50 100" preserveAspectRatio="none">
              <polygon points="-1,-1 50,50 -1,101" />
            </svg>
          </div>
          <div className={styles["pipelines__row__progress-area__markers"]}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.pipelines}>
      <div className={styles.pipelines__row + " " + styles["pipelines__row--headers"]}>
        <div>
          <p><b>Program</b></p>
        </div>
        <div>
          <p><b>Target</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Pre&shy;clinical</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>IND Enabling</b></p>
        </div>
        <div>
          <p className="lg:text-center"><b>Clinic</b></p>
        </div>
      </div>

      {pipelines}
    </div>
  );
};
