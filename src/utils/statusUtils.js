// src/utils/statusUtils.js

export const formatStatusLabel = (status, labelMap = {}) => {
  return labelMap[status] || status;
};

export const getStatusColor = (status, colorMap = {}) => {
  return colorMap[status] || "gray";
};