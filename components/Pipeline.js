import styles from "./Pipeline.module.scss";
import React from "react";
import he from "he";
import ReactMarkdown from "react-markdown";
import remarkSuperSub from "remark-supersub";

function Program(props) {
  const pipeline = props.pipeline;
  return (
    <div className={styles.pipelines__row} key={pipeline.name}>
      <div className={((pipeline.target && pipeline.indication) ? "" : styles["pipelines__row__name--no-info"]) + " pl-1"} style={{ overflow: (pipeline.description ? "visible" : "hidden") }}>
        <details className={styles.hoverParent + " my-3"} open={props.isOpen} onClick={(event) => props.onClick(event)}>
          <summary>
            <b>{he.decode(pipeline.name)}</b>
            {pipeline.indication && <p>{pipeline.indication}</p>}
          </summary>
          { pipeline.description &&
            <div
              className={styles.hoverParent__text + ((pipeline.target && pipeline.indication) ? "" : ` ${styles["hoverParent__text--bottom"]}`) + " text-xs lg:text-sm p-2"}
            >
              <ReactMarkdown
                plugins={[remarkSuperSub]}
                components={{
                  sub: "sub",
                  super: "super",
                }}
              >
                {pipeline.description}
              </ReactMarkdown>
            </div>
          }
        </details>
      </div>

      <div style={{ borderLeft: "1px dashed gray", display: pipeline.target ? "" : "none" }}>
        <p>{he.decode(pipeline.target || "")}</p>
      </div>

      <div style={{ borderLeft: "1px dashed gray", display: pipeline.indication ? "" : "none" }}>
        <p>{he.decode(pipeline.indication || "")}</p>
      </div>

      <div className={styles["pipelines__row__progress-area"]}>
        <div className={
          styles["pipelines__row__progress-bar"]
          + " " + styles[`pipelines__row__progress-bar__${Math.min(Math.max(1, Math.round(pipeline.progress)), 100)}`]
        }>
          <div className={
            styles["pipelines__row__progress-bar__inner"]
          }>
            <div className={styles["pipelines__row__progress-bar__inner__fill"]}></div>
            <svg viewBox="0 0 50 100" preserveAspectRatio="none" alt="">
              <polygon points="0,0 50,50 0,100" />
            </svg>
          </div>
          { pipeline.partner && <div className={styles["pipelines__row__progress-bar__partner-logo"]}>
            <img
              width={pipeline.partner.partnerLogoWidth}
              height={pipeline.partner.partnerLogoHeight}
              src={pipeline.partner.partnerLogoUrl}
              alt={pipeline.partner.partnerName + " Logo"}
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

export default class Pipelines extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openDetails: null };
  }

  handleDetailsClick(event, clickedDetails) {
    event.preventDefault();
    if (this.state.openDetails === clickedDetails) {
      this.setState({ openDetails: null });
    } else {
      this.setState({ openDetails: clickedDetails });
    }
  }

  render() {
    const pipelines = this.props.pipelines.map((pipeline) => {
      return <Program
        key={pipeline.name}
        pipeline={pipeline}
        isOpen={this.state.openDetails === pipeline.name}
        onClick={(event) => this.handleDetailsClick(event, pipeline.name)}
      />;
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
            <p><b>Indication</b></p>
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
            <p className="lg:text-center"><b>Clinic</b></p>
          </div>
        </div>

        {pipelines}
      </div>
    );
  }
};
