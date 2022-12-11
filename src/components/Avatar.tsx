import styles from "./Avatar.module.css";

export interface AvatarProps {
  src: string;
  hasBorder: boolean;
}

export function Avatar(props: AvatarProps) {
  return (
    <img
      className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
