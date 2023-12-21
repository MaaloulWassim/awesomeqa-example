import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import styles from "./ButtonCard.module.css";

interface ButtonCardProps {
  icon: React.ReactNode;
  buttonText: string;
  onClick: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ icon, buttonText, onClick }) => (
  <Card
    className={styles.card}
    onClick={onClick}
  >
    <CardHeader avatar={<div className={styles.icon}>{icon}</div>} />
    <CardContent>
      <Typography variant="h6" className={styles.title}>{buttonText}</Typography>
    </CardContent>
  </Card>
);

export default ButtonCard;
