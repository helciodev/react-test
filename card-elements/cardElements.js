import saving from "../assets/saving.svg";
import shieldBlue from "../assets/shield-blue.svg";
import shieldDark from "../assets/shield-dark.svg";
import fingerPrint from "../assets/fingerprint.svg";
import dollarSymbol from "../assets/dollar-symbol.svg";
import creditCard from "../assets/credit-card.svg";

const details = `A Lorem Ipsum is simply dummy text of the printing and typesetting industry`;
export const cardElements = [
  {
    bgColor: "#E6FDF6",
    img: saving,
    title: "Digital Saving",
    details,
    altText: "saving",
  },

  {
    bgColor: "#FEEFEB",
    img: dollarSymbol,
    title: "Online Investment",
    details,
    altText: "online",
  },
  {
    bgColor: "#E7E6EF",
    img: shieldDark,
    title: "Secure and Fast",
    details,
    altText: "secure",
  },
  {
    bgColor: "#ECF3F1",
    img: creditCard,
    title: "Purchase via Cards",
    details,
    altText: "cards",
    active: true,
  },
  {
    bgColor: "#FDEFEF",
    img: fingerPrint,
    title: "Instant and fee-free transaction",
    details,
    altText: "instant",
  },
  {
    bgColor: "#EBF3FE",
    img: shieldBlue,
    title: "Secure and Fast",
    details,
    altText: "Secure",
  },
];
