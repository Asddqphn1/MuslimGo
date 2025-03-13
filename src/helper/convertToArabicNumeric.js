const convertToArabicNumeric = (number) => {
  if (number === undefined || number === null || isNaN(number)) {
    console.error("Error: Nilai yang dikirim ke convertToArabicNumeric tidak valid:", number);
    return "٠"; // Nilai default jika error
  }
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return number
    .toString()
    .split("")
    .map((digit) => arabicNumbers[digit])
    .join("");
};

export { convertToArabicNumeric };
