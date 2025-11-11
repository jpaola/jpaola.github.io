export default function Footer() {
    return (
        <footer className="py-8 bg-bg-dark text-center text-sm text-gray-400 border-t border-white/10">
            © {new Date().getFullYear()} JPaola. All rights reserved.
        </footer>
    );
}