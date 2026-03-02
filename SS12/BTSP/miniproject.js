const students = seedStudents();

/** ------------------------------
 * Constants
 * ------------------------------ */
const AGE_MIN = 16;
const AGE_MAX = 60;
const GPA_MIN = 0.0;
const GPA_MAX = 10.0;
const DEFAULT_PAGE_SIZE = 5;

/** ------------------------------
 * Utilities
 * ------------------------------ */

/**
 * Get current timestamp (ms).
 * @returns {number}
 */
function nowTs() {
  return Date.now();
}

/**
 * Normalize whitespace: trim + collapse multiple spaces.
 * @param {string} s
 * @returns {string}
 */
function normalizeWhitespace(s) {
  return String(s ?? "")
    .trim()
    .replace(/\s+/g, " ");
}

/**
 * Normalize student name (basic rule): trim + collapse spaces.
 * (Bạn có thể thay bằng Title Case nếu muốn, nhưng phải nhất quán.)
 * @param {string} name
 * @returns {string}
 */
function normalizeName(name) {
  return normalizeWhitespace(name);
}

/**
 * Normalize status: lowercase & validate "active"/"inactive".
 * @param {string} statusRaw
 * @returns {StudentStatus|null}
 */
function normalizeStatus(statusRaw) {
  const s = normalizeWhitespace(statusRaw).toLowerCase();
  if (s === "active" || s === "inactive") return s;
  return null;
}

/**
 * Safe parse float.
 * @param {string} value
 * @returns {number|null}
 */
function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Safe parse int.
 * @param {string} value
 * @returns {number|null}
 */
function parseIntSafe(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  if (!Number.isInteger(n)) return null;
  return n;
}

/**
 * Check if an ID exists in students.
 * @param {string} id
 * @returns {boolean}
 */
function existsStudentId(id) {
  const norm = normalizeWhitespace(id);
  return students.some((st) => st.id === norm);
}

/**
 * Find student by ID.
 * @param {string} id
 * @returns {Student|null}
 */
function findStudentById(id) {
  const norm = normalizeWhitespace(id);
  return students.find((st) => st.id === norm) ?? null;
}

/**
 * Display students as console.table (fallback to log).
 * @param {Student[]} list
 * @param {string} title
 */
function renderStudents(list, title = "STUDENTS") {
  console.log(`\n=== ${title} (count: ${list.length}) ===`);
  const view = list.map((st) => ({
    id: st.id,
    name: st.name,
    age: st.age,
    gpa: st.gpa,
    status: st.status,
    createdAt: new Date(st.createdAt).toLocaleString(),
    updatedAt: st.updatedAt ? new Date(st.updatedAt).toLocaleString() : "",
    deletedAt: st.deletedAt ? new Date(st.deletedAt).toLocaleString() : "",
  }));

  if (console.table) console.table(view);
  else console.log(view);
}

/**
 * Display a message consistently.
 * @param {string} msg
 */
function info(msg) {
  alert(msg);
}

/**
 * Display an error consistently.
 * @param {string} msg
 */
function error(msg) {
  alert(`❌ ${msg}`);
}

/** ------------------------------
 * Prompt / Input (Recursion-based re-entry)
 * ------------------------------ */

/**
 * Prompt until user enters a non-empty string (after normalization).
 * @param {string} message
 * @returns {string}
 */
function promptNonEmpty(message) {
  const raw = prompt(message);
  const value = normalizeWhitespace(raw);
  if (!value) {
    error("Không được để trống. Vui lòng nhập lại.");
    return promptNonEmpty(message);
  }
  return value;
}

/**
 * Prompt a student ID. Optionally require uniqueness.
 * @param {string} message
 * @param {Object} opts
 * @param {boolean} [opts.mustBeUnique=false]
 * @param {boolean} [opts.mustExist=false]
 * @returns {string}
 */
function promptStudentId(message, opts = {}) {
  const { mustBeUnique = false, mustExist = false } = opts;
  const id = promptNonEmpty(message);

  if (mustBeUnique && existsStudentId(id)) {
    error("ID đã tồn tại. Vui lòng nhập ID khác.");
    return promptStudentId(message, opts);
  }
  if (mustExist && !existsStudentId(id)) {
    error("Không tìm thấy sinh viên với ID này. Vui lòng nhập lại.");
    return promptStudentId(message, opts);
  }
  return id;
}

/**
 * Prompt age until valid integer within range.
 * @param {string} message
 * @returns {number}
 */
function promptAge(message) {
  const raw = promptNonEmpty(message);
  const n = parseIntSafe(raw);
  if (n === null) {
    error("Tuổi phải là số nguyên hợp lệ. Vui lòng nhập lại.");
    return promptAge(message);
  }
  if (n < AGE_MIN || n > AGE_MAX) {
    error(
      `Tuổi phải nằm trong khoảng ${AGE_MIN}–${AGE_MAX}. Vui lòng nhập lại.`,
    );
    return promptAge(message);
  }
  return n;
}

/**
 * Prompt gpa until valid number within range.
 * @param {string} message
 * @returns {number}
 */
function promptGpa(message) {
  const raw = promptNonEmpty(message);
  const n = parseNumber(raw);
  if (n === null) {
    error("GPA phải là số hợp lệ. Vui lòng nhập lại.");
    return promptGpa(message);
  }
  if (n < GPA_MIN || n > GPA_MAX) {
    error(
      `GPA phải nằm trong khoảng ${GPA_MIN}–${GPA_MAX}. Vui lòng nhập lại.`,
    );
    return promptGpa(message);
  }
  // Optionally round to 2 decimals for consistency (business choice)
  return Math.round(n * 100) / 100;
}

/**
 * Prompt status until valid.
 * @param {string} message
 * @returns {StudentStatus}
 */
function promptStatus(message) {
  const raw = promptNonEmpty(message);
  const s = normalizeStatus(raw);
  if (!s) {
    error('Status chỉ được là "active" hoặc "inactive". Vui lòng nhập lại.');
    return promptStatus(message);
  }
  return s;
}

/**
 * Prompt optional field. If empty => null.
 * @param {string} message
 * @returns {string|null}
 */
function promptOptional(message) {
  const raw = prompt(message);
  const value = normalizeWhitespace(raw);
  return value ? value : null;
}

/**
 * Prompt optional age (integer). If empty => null. If invalid => re-enter.
 * @param {string} message
 * @returns {number|null}
 */
function promptOptionalAge(message) {
  const raw = prompt(message);
  const value = normalizeWhitespace(raw);
  if (!value) return null;
  const n = parseIntSafe(value);
  if (n === null || n < AGE_MIN || n > AGE_MAX) {
    error(`Tuổi phải là số nguyên trong khoảng ${AGE_MIN}–${AGE_MAX}.`);
    return promptOptionalAge(message);
  }
  return n;
}

/**
 * Prompt optional gpa. If empty => null. If invalid => re-enter.
 * @param {string} message
 * @returns {number|null}
 */
function promptOptionalGpa(message) {
  const raw = prompt(message);
  const value = normalizeWhitespace(raw);
  if (!value) return null;

  const n = parseNumber(value);
  if (n === null || n < GPA_MIN || n > GPA_MAX) {
    error(`GPA phải là số trong khoảng ${GPA_MIN}–${GPA_MAX}.`);
    return promptOptionalGpa(message);
  }
  return Math.round(n * 100) / 100;
}

/**
 * Prompt optional status. If empty => null. If invalid => re-enter.
 * @param {string} message
 * @returns {StudentStatus|null}
 */
function promptOptionalStatus(message) {
  const raw = prompt(message);
  const value = normalizeWhitespace(raw);
  if (!value) return null;

  const s = normalizeStatus(value);
  if (!s) {
    error('Status chỉ được là "active" hoặc "inactive".');
    return promptOptionalStatus(message);
  }
  return s;
}

/** ------------------------------
 * Business: Data Governance
 * ------------------------------ */

/**
 * Create new student (validated & normalized).
 */
function createStudent() {
  const id = promptStudentId("Nhập ID (duy nhất), ví dụ S01:", {
    mustBeUnique: true,
  });
  const name = normalizeName(promptNonEmpty("Nhập Họ tên:"));
  const age = promptAge(`Nhập Tuổi (${AGE_MIN}–${AGE_MAX}):`);
  const gpa = promptGpa(`Nhập GPA (${GPA_MIN}–${GPA_MAX}):`);
  const status = promptStatus('Nhập status ("active" hoặc "inactive"):');

  /** @type {Student} */
  const st = {
    id,
    name,
    age,
    gpa,
    status,
    createdAt: nowTs(),
    updatedAt: null,
    deletedAt: null,
  };

  students.push(st);
  info(`✅ Thêm mới thành công: ${st.id} - ${st.name}`);
}

/**
 * Partial update by ID (blank keeps old).
 */
function partialUpdateStudent() {
  const id = promptStudentId("Nhập ID cần cập nhật:", { mustExist: true });
  const st = findStudentById(id);
  if (!st) {
    error("Không tìm thấy sinh viên (lỗi hệ thống).");
    return;
  }

  // Input optional fields (blank => keep)
  const nameOpt = promptOptional("Nhập Họ tên mới (bỏ trống để giữ nguyên):");
  const ageOpt = promptOptionalAge(
    `Nhập Tuổi mới (${AGE_MIN}–${AGE_MAX}) (bỏ trống để giữ nguyên):`,
  );
  const gpaOpt = promptOptionalGpa(
    `Nhập GPA mới (${GPA_MIN}–${GPA_MAX}) (bỏ trống để giữ nguyên):`,
  );
  const statusOpt = promptOptionalStatus(
    'Nhập status mới ("active"/"inactive") (bỏ trống để giữ nguyên):',
  );

  const nextName = nameOpt ? normalizeName(nameOpt) : st.name;
  const nextAge = ageOpt ?? st.age;
  const nextGpa = gpaOpt ?? st.gpa;
  const nextStatus = statusOpt ?? st.status;

  // Business-safe check (optional, per SRS: validate again)
  if (!nextName) {
    error("Tên không hợp lệ sau chuẩn hóa.");
    return;
  }

  st.name = nextName;
  st.age = nextAge;
  st.gpa = nextGpa;
  st.status = nextStatus;
  st.updatedAt = nowTs();

  info(`✅ Cập nhật thành công: ${st.id}`);
}

/**
 * Soft delete student by ID: status -> inactive, set deletedAt.
 */
function softDeleteStudent() {
  const id = promptStudentId("Nhập ID cần Soft Delete:", { mustExist: true });
  const st = findStudentById(id);
  if (!st) {
    error("Không tìm thấy sinh viên (lỗi hệ thống).");
    return;
  }

  if (st.status === "inactive" && st.deletedAt !== null) {
    info("ℹ️ Sinh viên đã ở trạng thái soft deleted trước đó.");
    return;
  }

  const ok = confirm(`Xác nhận Soft Delete sinh viên ${st.id} - ${st.name}?`);
  if (!ok) {
    info("Đã hủy thao tác.");
    return;
  }

  st.status = "inactive";
  st.deletedAt = nowTs();
  st.updatedAt = nowTs();

  info(`✅ Soft Delete thành công: ${st.id}`);
}

/**
 * Restore student by ID: inactive + deletedAt != null => active, deletedAt -> null.
 */
function restoreStudent() {
  const id = promptStudentId("Nhập ID cần Restore:", { mustExist: true });
  const st = findStudentById(id);
  if (!st) {
    error("Không tìm thấy sinh viên (lỗi hệ thống).");
    return;
  }

  const canRestore = st.status === "inactive" && st.deletedAt !== null;
  if (!canRestore) {
    info(
      "ℹ️ Chỉ có thể Restore sinh viên đã soft delete (inactive và có deletedAt).",
    );
    return;
  }

  const ok = confirm(`Xác nhận Restore sinh viên ${st.id} - ${st.name}?`);
  if (!ok) {
    info("Đã hủy thao tác.");
    return;
  }

  st.status = "active";
  st.deletedAt = null;
  st.updatedAt = nowTs();

  info(`✅ Restore thành công: ${st.id}`);
}

/** ------------------------------
 * Business: Data Pipeline (Search -> Filter -> Sort -> Pagination -> View)
 * ------------------------------ */

/**
 * Apply Search (partial match by name, case-insensitive).
 * @param {Student[]} list
 * @param {string} keyword
 * @returns {Student[]}
 */
function applySearch(list, keyword) {
  const k = normalizeWhitespace(keyword).toLowerCase();
  if (!k) return list;
  return list.filter((st) => st.name.toLowerCase().includes(k));
}

/**
 * Apply Filter by status.
 * @param {Student[]} list
 * @param {"all"|"active"|"inactive"} statusFilter
 * @returns {Student[]}
 */
function applyFilterStatus(list, statusFilter) {
  if (statusFilter === "all") return list;
  return list.filter((st) => st.status === statusFilter);
}

/**
 * Apply Sort by GPA.
 * @param {Student[]} list
 * @param {"asc"|"desc"} order
 * @returns {Student[]}
 */
function applySortGpa(list, order) {
  const copy = [...list];
  const dir = order === "asc" ? 1 : -1;
  return copy.sort((a, b) => (a.gpa - b.gpa) * dir);
}

/**
 * Paginate list.
 * @param {Student[]} list
 * @param {number} pageSize
 * @param {number} pageNumber 1-based
 * @returns {{page: Student[], pageNumber: number, totalPages: number, totalRecords: number}}
 */
function paginate(list, pageSize, pageNumber) {
  const totalRecords = list.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const safePage = Math.min(Math.max(1, pageNumber), totalPages);

  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  return {
    page: list.slice(start, end),
    pageNumber: safePage,
    totalPages,
    totalRecords,
  };
}

/**
 * View Students in Pipeline Mode with page navigation.
 * Uses recursion to navigate (avoid while for internal loops).
 */
function viewStudentsPipeline() {
  // Collect pipeline parameters
  const keyword = promptOptional("Search theo tên (bỏ trống nếu không):") ?? "";
  const statusRaw = promptOptional(
    'Filter status: "all" / "active" / "inactive" (bỏ trống = all):',
  );
  const statusFilter = (() => {
    const s = (statusRaw ? statusRaw.toLowerCase() : "all").trim();
    return s === "active" || s === "inactive" || s === "all" ? s : "all";
  })();

  const sortRaw = promptOptional('Sort GPA: "asc" / "desc" (bỏ trống = desc):');
  const sortOrder = sortRaw && sortRaw.toLowerCase() === "asc" ? "asc" : "desc";

  const pageSizeRaw = promptOptional(
    `Page size (bỏ trống = ${DEFAULT_PAGE_SIZE}):`,
  );
  const pageSizeNum = pageSizeRaw ? parseIntSafe(pageSizeRaw) : null;
  const pageSize =
    pageSizeNum && pageSizeNum > 0 ? pageSizeNum : DEFAULT_PAGE_SIZE;

  // Pipeline (must not mutate original)
  const base = [...students]; // clone
  const afterSearch = applySearch(base, keyword);
  const afterFilter = applyFilterStatus(afterSearch, statusFilter);
  const afterSort = applySortGpa(afterFilter, sortOrder);

  // Start navigation from page 1
  const startPage = 1;
  return viewPipelinePage(afterSort, pageSize, startPage, {
    keyword,
    statusFilter,
    sortOrder,
  });
}

/**
 * Render a pipeline page & ask navigation command (recursive navigation).
 * @param {Student[]} finalList
 * @param {number} pageSize
 * @param {number} pageNumber
 * @param {{keyword: string, statusFilter: string, sortOrder: string}} meta
 */
function viewPipelinePage(finalList, pageSize, pageNumber, meta) {
  const {
    page,
    totalPages,
    totalRecords,
    pageNumber: safePage,
  } = paginate(finalList, pageSize, pageNumber);

  renderStudents(
    page,
    `PIPELINE VIEW | search="${meta.keyword}" | status=${meta.statusFilter} | sort(gpa)=${meta.sortOrder}`,
  );
  console.log(
    `Footer: Page ${safePage}/${totalPages} | Total records: ${totalRecords}`,
  );

  const cmd = promptOptional(
    'Điều hướng: "first", "last", "next", "prev", hoặc nhập số trang. (Enter để thoát)',
  );
  if (!cmd) return;

  const c = cmd.trim().toLowerCase();
  const nextPage = (() => {
    if (c === "first") return 1;
    if (c === "last") return totalPages;
    if (c === "next") return safePage + 1;
    if (c === "prev") return safePage - 1;
    const n = parseIntSafe(c);
    if (n !== null) return n;
    return safePage; // invalid => stay
  })();

  return viewPipelinePage(finalList, pageSize, nextPage, meta);
}

/** ------------------------------
 * Business: Analytics (reduce-heavy)
 * ------------------------------ */

/**
 * Classify academic group by GPA.
 * @param {number} gpa
 * @returns {"Xuất sắc"|"Khá-Giỏi"|"Trung bình"|"Yếu"}
 */
function classifyGpa(gpa) {
  if (gpa >= 8.5) return "Xuất sắc";
  if (gpa >= 7.0) return "Khá-Giỏi";
  if (gpa >= 5.0) return "Trung bình";
  return "Yếu";
}

/**
 * Compute analytics dashboard and print.
 * All core stats use reduce (can combine with filter/map).
 */
function analyticsDashboard() {
  if (students.length === 0) {
    info("Danh sách trống. Không có dữ liệu để thống kê.");
    return;
  }

  // Overview (reduce)
  const overview = students.reduce(
    (acc, st) => {
      acc.total += 1;
      if (st.status === "active") acc.active += 1;
      if (st.status === "inactive") acc.inactive += 1;
      return acc;
    },
    { total: 0, active: 0, inactive: 0 },
  );

  // GPA metrics (reduce)
  const gpaAgg = students.reduce(
    (acc, st) => {
      acc.sumAll += st.gpa;

      if (st.status === "active") {
        acc.sumActive += st.gpa;
        acc.countActive += 1;
      } else {
        acc.sumInactive += st.gpa;
        acc.countInactive += 1;
      }
      return acc;
    },
    {
      sumAll: 0,
      sumActive: 0,
      countActive: 0,
      sumInactive: 0,
      countInactive: 0,
    },
  );

  const avgAll = gpaAgg.sumAll / overview.total;
  const avgActive = gpaAgg.countActive
    ? gpaAgg.sumActive / gpaAgg.countActive
    : 0;
  const avgInactive = gpaAgg.countInactive
    ? gpaAgg.sumInactive / gpaAgg.countInactive
    : 0;

  // Leaderboards (copy + sort, do not mutate)
  const top5Gpa = [...students].sort((a, b) => b.gpa - a.gpa).slice(0, 5);
  const top5Youngest = [...students].sort((a, b) => a.age - b.age).slice(0, 5);

  // Risk report (filter, then summary by reduce)
  const gpaEq0 = students.filter((st) => st.gpa === 0);
  const gpaLt3 = students.filter((st) => st.gpa < 3.0);

  const riskSummary = students.reduce(
    (acc, st) => {
      if (st.gpa === 0) acc.eq0 += 1;
      if (st.gpa < 3.0) acc.lt3 += 1;
      return acc;
    },
    { eq0: 0, lt3: 0 },
  );

  // Academic distribution (reduce)
  const distribution = students.reduce((acc, st) => {
    const bucket = classifyGpa(st.gpa);
    acc[bucket] = (acc[bucket] ?? 0) + 1;
    return acc;
  }, /** @type {Record<string, number>} */ ({}));

  // Output
  console.log("\n=== ANALYTICS DASHBOARD ===");
  console.log("1) Overview:", {
    total: overview.total,
    active: overview.active,
    inactive: overview.inactive,
    activeRate: `${((overview.active / overview.total) * 100).toFixed(2)}%`,
    inactiveRate: `${((overview.inactive / overview.total) * 100).toFixed(2)}%`,
  });

  console.log("2) GPA Metrics:", {
    avgAll: Number(avgAll.toFixed(2)),
    avgActive: Number(avgActive.toFixed(2)),
    avgInactive: Number(avgInactive.toFixed(2)),
  });

  console.log("3) Top 5 GPA:");
  renderStudents(top5Gpa, "TOP 5 GPA");

  console.log("4) Top 5 Youngest:");
  renderStudents(top5Youngest, "TOP 5 YOUNGEST");

  console.log("5) Risk Report:", {
    countGpaEq0: riskSummary.eq0,
    countGpaLt3: riskSummary.lt3,
  });

  if (gpaEq0.length) renderStudents(gpaEq0, "RISK: GPA = 0");
  if (gpaLt3.length) renderStudents(gpaLt3, "RISK: GPA < 3.0");

  console.log("6) Academic Distribution:", distribution);

  info("✅ Đã in Analytics Dashboard ra console.");
}

/** ------------------------------
 * Menu & Main Loop (while/do-while allowed)
 * ------------------------------ */

/**
 * Print menu options.
 */
function printMenu() {
  console.log(`
===============================
 STUDENT MANAGEMENT SYSTEM v2
===============================
1. Create Student
2. Update Student (Partial)
3. Soft Delete Student
4. Restore Student
5. View Students (Pipeline Mode)
6. Analytics Dashboard
7. Read All Students (Raw List)
0. Exit
`);
}

/**
 * Read all students (raw list) – helpful for debugging.
 */
function readAllStudents() {
  renderStudents(students, "ALL STUDENTS (RAW)");
  info("✅ Đã hiển thị danh sách ra console.");
}

/**
 * Main entry.
 */
function main() {
  let choice = "";
  do {
    printMenu();
    choice = normalizeWhitespace(
      prompt(`
        ==== STUDENT MANAGER ADVANCED ====
            1. Create Student
            2. Update Student
            3. Soft Delete Student
            4. Restore Student
            5. View Students
            6. Analytics Dashboard
            0. Exit
        `),
    );

    switch (choice) {
      case "1":
        createStudent();
        break;
      case "2":
        partialUpdateStudent();
        break;
      case "3":
        softDeleteStudent();
        break;
      case "4":
        restoreStudent();
        break;
      case "5":
        viewStudentsPipeline();
        break;
      case "6":
        analyticsDashboard();
        break;
      case "7":
        readAllStudents();
        break;
      case "0":
        info("Tạm biệt!");
        break;
      default:
        error("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  } while (choice !== "0");
}

/** ------------------------------
 * Seed data (optional)
 * ------------------------------ */

/**
 * Create seed students for testing pipeline/analytics.
 * @returns {Student[]}
 */
function seedStudents() {
  const baseTs = nowTs() - 1000 * 60 * 60 * 24;
  /** @type {Student[]} */
  const seed = [
    { id: "S01", name: "Nguyen Van A", age: 19, gpa: 8.9, status: "active" },
    { id: "S02", name: "Tran Thi B", age: 18, gpa: 7.5, status: "active" },
    { id: "S03", name: "Le Van C", age: 21, gpa: 6.2, status: "active" },
    { id: "S04", name: "Pham Thi D", age: 20, gpa: 0, status: "inactive" },
    { id: "S05", name: "Hoang Van E", age: 22, gpa: 2.8, status: "active" },
    { id: "S06", name: "Do Thi F", age: 17, gpa: 9.1, status: "active" },
    { id: "S07", name: "Bui Van G", age: 25, gpa: 4.9, status: "inactive" },
    { id: "S08", name: "Vu Thi H", age: 23, gpa: 8.4, status: "active" },
    { id: "S09", name: "Dang Van I", age: 28, gpa: 7.0, status: "active" },
    { id: "S10", name: "Nguyen Thi K", age: 16, gpa: 5.5, status: "active" },
  ].map((x, idx) => ({
    id: x.id,
    name: normalizeName(x.name),
    age: x.age,
    gpa: x.gpa,
    status: x.status,
    createdAt: baseTs + idx * 1000,
    updatedAt: null,
    deletedAt: x.status === "inactive" ? baseTs + idx * 1000 : null,
  }));

  return seed;
}

// Run
main();
