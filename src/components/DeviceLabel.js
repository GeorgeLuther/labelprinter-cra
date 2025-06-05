//Test URI: lotlabel?lotId=dHVhjE7f28cJ3NNNB27Dsu&sku=PAINT0016&jobName=GARD%2010574&jobId=23717&release=1of1&kit=23717-R1-K1

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import QRCode from "react-qr-code";

function DeviceLabel() {
  let [searchParams] = useSearchParams();
  const allParams = {};
  for (const [key, value] of searchParams.entries()) {
    allParams[key] = value;
  }
  const { lotId, sku, assetNumber } = allParams;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="label">
      <div className="lot-info">
        <h1 className="asset-number" font-size="5em">{assetNumber}</h1>
        <h3>
          Lot ID: <i>{lotId}</i>
        </h3>
        <QRCode size={512} value={lotId} level={"H"} />
      </div>
      <h2 className="device-sku" font-size="3.5em">{sku}</h2>
    </div>
  );
}

export default DeviceLabel;
