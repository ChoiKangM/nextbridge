export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-black text-white tracking-tight">
              next<span className="text-indigo-400">bridge</span>
            </p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              AI와 함께하는 바이브코딩으로<br />
              당신만의 독점적 경쟁력을 만드세요
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">프로그램</p>
            <ul className="space-y-2">
              {["프로그램 소개", "커리큘럼", "결과물 갤러리", "신청하기"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">문의</p>
            <p className="text-sm text-gray-400">
              프로그램 도입 또는 단체 신청 문의는<br />
              아래 이메일로 연락해 주세요.
            </p>
            <a
              href="mailto:contact@nextbridge.kr"
              className="text-sm text-indigo-400 hover:text-indigo-300 mt-2 block transition-colors"
            >
              contact@nextbridge.kr
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © 2025 nextbridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
