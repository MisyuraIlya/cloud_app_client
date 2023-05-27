import React from "react";
import styles from "./FileActions.module.scss";
import { Button, Popconfirm } from "antd";

interface FileActionsProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Share
      </Button>

      <Popconfirm
        title="Delete files??"
        description="all files will be in trash"
        okText="ok"
        cancelText="no"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    </div>
  );
};