export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center p-8 mt-16 text-muted-foreground text-sm">
      <p>&copy; {year} Aaditya Panda. All rights reserved.</p>
    </footer>
  );
}
