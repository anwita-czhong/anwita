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

      {pipelines}
    </div>
  )
};
