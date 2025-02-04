//Test URI: lotlabel?lotId=dHVhjE7f28cJ3NNNB27Dsu&sku=PAINT0016&jobName=GARD%2010574&jobId=23717&release=1of1&kit=23717-R1-K1

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import QRCode from "react-qr-code";

function LotLabel() {
  let [searchParams] = useSearchParams();
  const allParams = {};
  for (const [key, value] of searchParams.entries()) {
    allParams[key] = value;
  }
  const { lotId, sku, component, jobName, jobId, release, kit } = allParams;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="label">
      <div className="lot-info">
        <p>BMP SKU:</p>
        <h1>{sku}</h1>
        <h2>{component}</h2>
        <h3>
          Lot ID: <i>{lotId}</i>
        </h3>
        <QRCode size={512} value={lotId} level={"H"} />
      </div>
      {jobId && (
        <div className="job-info">
          <p>
            Job Name: <b>{jobName}</b>
          </p>
          <p>
            Job ID: <b>{jobId}</b>
          </p>
          <p>
            Release: <b>{release}</b>
          </p>
          <p>
            Kit: <b>{kit}</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default LotLabel;
