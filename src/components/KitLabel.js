//Test URI: lotlabel?lotId=dHVhjE7f28cJ3NNNB27Dsu&sku=PAINT0016&jobName=GARD%2010574&jobId=23717&release=1of1&kit=23717-R1-K1

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import QRCode from "react-qr-code";

function KitLabel() {
  let [searchParams] = useSearchParams();
  const allParams = {};
  for (const [key, value] of searchParams.entries()) {
    allParams[key] = value;
  }
  const { kitName, jobName, alert, jobNumber, release, kitId } = allParams;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="label">
      <div className="kit-info">
        <p>Kit:</p>
        <h1>{kitName}</h1>
        <p>Job Name:</p>
        <p className="bold-txt">{jobName}</p>
        <p>For:</p>
        <p className="bold-txt">{alert}</p>
        <br></br>
         <QRCode size={300} value={lotId} level={"H"} />
      </div>
      {jobName && (
        <div className="job-info">
          <p>
            Job #: <b>{jobNumber}</b>
          </p>
          <p>
            Release: <b>{release}</b>
          </p>
          <p>
            Kit ID: <i>{kitId}</i>
          </p>
        </div>
      )}
    </div>
  );
}

export default KitLabel;
