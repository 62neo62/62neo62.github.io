// ── Edit this file to add/change projects ──────────────────────────────
// youtube: the video ID from the URL, e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
//          (also accepts full URLs). Leave "" for no video section on that card.
// image: optional picture (shown below the video if there is one), e.g. "images/my-project.jpg" (put the file in the images/ folder).
const SITE = {
  name: "Sebastian Escoriza",
  tagline: "hardware, vision",
  github: "62neo62",
  youtubeChannel: "", // e.g. "https://www.youtube.com/@yourchannel"
  email: "",          // optional
  photo: "",          // headshot, e.g. "images/headshot.jpg" (square crop works best). Leave "" to show initials.
};

const PROJECTS = [
  {
    title: "FlexAI — Pose-Mirroring Robot Arm",
    description: "A robot arm that copies your arm movements in real time. PoseNet runs on a Coral Edge TPU to track body keypoints from a camera. Those keypoints are turned into joint angles for five servos: base, shoulder, elbow, wrist and gripper. Touching your wrists together closes the gripper. A Flask server streams the annotated camera feed live.",
    tags: ["Python", "PoseNet", "Edge TPU", "Raspberry Pi", "Servos"],
    youtube: "https://www.youtube.com/shorts/7ANikwv1Eg4",
    image: "images/flexai-arm-cad.jpg",
    imageAlt: "3D CAD model of the 4-servo MG996R robot arm on a ball-bearing turntable base",
    repo: "https://github.com/62neo62/flexai",
  },
  {
    title: "Brain Tumor MRI Classifier",
    description: "Convolutional neural networks that classify brain MRI scans by tumor type. Three Keras/TensorFlow models were trained and compared with data augmentation, batch normalization, and early stopping. The best model reached 99.08% test accuracy.",
    tags: ["TensorFlow", "Keras", "CNN", "Medical Imaging"],
    youtube: "",
    image: "images/brain-tumor-mri.jpg",
    imageAlt: "Sample MRI scans from the dataset for each class: glioma, meningioma, no tumor, and pituitary",
    repo: "https://github.com/62neo62/BrainTumorDiagnosticCNN",
  },
  {
    title: "Acoustic Triangulation — Defense Tech Hackathon 2024",
    description: "Built at the Defense Tech Hackathon on the USS Hornet. Three networked laptops act as microphones, share the arrival times of loud sounds like gunfire, and triangulate where the sound came from. Later extended into a design for self-powered mesh sensor nodes.",
    tags: ["Python", "Signal Processing", "Networking", "Hackathon"],
    youtube: "",
    repo: "https://github.com/62neo62/def-hackaton-hackaton-2024-triangulate-noise",
  },
  {
    title: "FPGA Piano",
    description: "A piano synthesizer written in Verilog for an FPGA board. Switches select notes, and a clock-divider counter produces the matching square-wave frequency on the speaker output. Verified with a simulation testbench.",
    tags: ["Verilog", "FPGA", "Digital Design", "Vivado"],
    youtube: "https://www.youtube.com/watch?v=d-gd52ioHGg",
    repo: "https://github.com/62neo62/FPGA-Piano",
  },
];
