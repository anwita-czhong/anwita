import styles from './Pipeline.module.scss'

export default function Pipeline(props) {
  const pipelines = props.pipelines.map((pipeline) => {

  })

  return (
    <div className={styles.pipelines}>
      <div className={styles.pipelines__headers}>
        <div></div>
        <div>
          <p><b>Candidate</b></p>
        </div>
        <div>
          <p><b>Target</b></p>
        </div>
        <div>
          <p><b>Pre&shy;clinical</b></p>
        </div>
        <div>
          <p><b>IND Enabling</b></p>
        </div>
        <div>
          <p><b>Clinic</b></p>
        </div>
      </div>
      <div className={styles.pipelines__row}>
        <div className="w-full h-full">.</div>
        <div className="">
          <p><b>Exenokine-21</b></p>
        </div>
        <p>IL-21</p>
        <div className={styles["pipelines__row__progress-area"]}>
          <div className={styles["pipelines__row__progress-area__markers"]}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
          <div className={styles["pipelines__row__progress-bar"]}></div>
        </div>
      </div>
      {/* {pipelines} */}
    </div>
  )
};
