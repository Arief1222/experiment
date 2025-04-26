  // Function to calculate area of a rectangle
function calculateElevationAngleArea(angle, distance) {
    // Convert angle to radians
    const angleInRadians = angle * (Math.PI / 180);
    // Calculate height using trigonometry (sine)
    const height = distance * Math.sin(angleInRadians);
    
    // Calculate base using trigonometry (cosine) 
    const base = distance * Math.cos(angleInRadians);
    
    // Calculate area using triangle formula
    return (base * height) / 2;
  }
  
  // Tambahkan kode berikut untuk menguji fungsi
  const testAngle = 45;    // sudut 45 derajat
  const testDistance = 10;  // jarak 10 unit
  
  // Panggil fungsi dan simpan hasilnya
  const result = calculateElevationAngleArea(testAngle, testDistance);
  
  // Tampilkan hasil
  console.log(`Hasil perhitungan area:`);
  console.log(`Sudut: ${testAngle} derajat`);
  console.log(`Jarak: ${testDistance} unit`);
  console.log(`Area: ${result} unit persegi`);
  