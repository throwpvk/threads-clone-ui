import React, { useState } from "react";
import { ColumnsManager, ColumnContent } from "@/components/columns";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/auth/authSlice";
import LoginCard from "@/components/login/LoginCard";
import { COLUMN_TYPES, COLUMN_CONFIG } from "@/constants/columnTypes";

export default function HomePage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [columns, setColumns] = useState([
    {
      id: "for-you-main",
      type: COLUMN_TYPES.FOR_YOU,
      title: COLUMN_CONFIG[COLUMN_TYPES.FOR_YOU].label,
      width: "640px",
    },
  ]);

  const handleSelectColumnType = (type) => {
    const config = COLUMN_CONFIG[type];
    const newColumn = {
      id: `${type}-${Date.now()}`,
      type,
      title: config.label,
      width: "520px",
    };
    setColumns([...columns, newColumn]);
  };

  const handleChangeColumnType = (columnId, newType) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? {
              ...col,
              type: newType,
              title: COLUMN_CONFIG[newType].label,
            }
          : col
      )
    );
  };

  const handleRemoveColumn = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.filter((col) => col.id !== columnId)
    );
  };

  return (
    <>
      <ColumnsManager
        columns={columns.map((col, index) => ({
          ...col,
          content: (
            <ColumnContent
              type={col.type}
              enableScroll={columns.length > 1}
              onChangeType={(newType) =>
                handleChangeColumnType(col.id, newType)
              }
              columnIndex={index}
              onRemoveColumn={() => handleRemoveColumn(col.id)}
            />
          ),
        }))}
        hasAddColumnBtn={isAuthenticated}
        onSelectColumnType={handleSelectColumnType}
      />
      {!isAuthenticated && (
        <div className="fixed top-15 z-50 w-90 hidden xl:block md:left-[calc(50%+290px)] lg:left-[calc(50%+338px)]">
          <LoginCard
            title="Log in or sign up for Threads"
            disc="See what people are talking about and join the conversation."
            className="py-5! px-4!"
            titleClassName="text-2xl!"
            descClassName="text-base!"
            shadow={false}
            bgColor="bg-accent"
            contentBgColor="bg-card"
          />
        </div>
      )}
    </>
  );
}
