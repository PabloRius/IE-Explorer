import { MapView } from "@/components/MapView";
import { getImageUrl } from "@/config";

export function MainNav() {
  return (
    <MapView
      imageSrc={getImageUrl("maps/IEGOCS/MainBackground.png")}
      width={320}
      height={216}
      markers={[
        {
          marker: (
            <>
              <image
                x={10}
                y={19}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/0.png")}
              />
              <rect
                x={10}
                y={19}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "PresentInazuma",
          label: "Inazuma Eleven Go Chrono Stones Map - Inazuma (Present)",
        },
        {
          marker: (
            <>
              <image
                x={71}
                y={19}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/1.png")}
              />
              <rect
                x={71}
                y={19}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "HolyRoadStadium",
        },
        {
          marker: (
            <>
              <image
                x={132}
                y={19}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/2.png")}
              />
              <rect
                x={132}
                y={19}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Sanctum",
        },
        {
          marker: (
            <>
              <image
                x={193}
                y={19}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/3.png")}
              />
              <rect
                x={193}
                y={19}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Okinawa",
        },
        {
          marker: (
            <>
              <image
                x={254}
                y={19}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/4.png")}
              />
              <rect
                x={254}
                y={19}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "FFStadium",
        },
        {
          marker: (
            <>
              <image
                x={10}
                y={80}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/5.png")}
              />
              <rect
                x={10}
                y={80}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "PastInazuma",
        },
        {
          marker: (
            <>
              <image
                x={71}
                y={80}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/6.png")}
              />
              <rect
                x={71}
                y={80}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Tonghana",
        },
        {
          marker: (
            <>
              <image
                x={132}
                y={80}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/7.png")}
              />
              <rect
                x={132}
                y={80}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "SengokuJapan",
        },
        {
          marker: (
            <>
              <image
                x={193}
                y={80}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/8.png")}
              />
              <rect
                x={193}
                y={80}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "MedievalFrance",
        },
        {
          marker: (
            <>
              <image
                x={254}
                y={80}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/9.png")}
              />
              <rect
                x={254}
                y={80}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "ThreeKingdomsChina",
        },
        {
          marker: (
            <>
              <image
                x={10}
                y={141}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/10.png")}
              />
              <rect
                x={10}
                y={141}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "EdoKyoto",
        },
        {
          marker: (
            <>
              <image
                x={71}
                y={141}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/11.png")}
              />
              <rect
                x={71}
                y={141}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Jurassic",
        },
        {
          marker: (
            <>
              <image
                x={132}
                y={141}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/12.png")}
              />
              <rect
                x={132}
                y={141}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Camelot",
        },
        {
          marker: (
            <>
              <image
                x={193}
                y={141}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/13.png")}
              />
              <rect
                x={193}
                y={141}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "SanEldor",
        },
        {
          marker: (
            <>
              <image
                x={254}
                y={141}
                height={56}
                width={56}
                href={getImageUrl("maps/IEGOCS/14.png")}
              />
              <rect
                x={254}
                y={141}
                width={56}
                height={56}
                className="marker"
                cursor={"pointer"}
              />
            </>
          ),
          path: "Dreamland",
        },
      ]}
    />
  );
}
