export const verticalLinePlugin = {
  id: "verticalLine",
  beforeDatasetsDraw: (chart) => {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom },
    } = chart;

    if (tooltip?._active?.length) {
      const x = tooltip._active[0].element.x;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#6b46c1";
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.restore();
    }
  },
};
