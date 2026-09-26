export default function ContactMe() {
  return (
    <section
      id="contact"
      className="py-20 border-t border-border-line transition-colors">
      <div className="max-w-2xl mx-auto rounded-xl border border-border-line bg-bg-card p-6 shadow-xl transition-colors">
        {/* Terminal Tab Bar */}
        <div className="mb-6 flex items-center justify-between border-b border-border-line pb-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>establish_connection.sh</span>
          </div>
          <span className="font-mono text-[10px] text-text-muted/70">
            secure_tls
          </span>
        </div>

        {/* Interactive Terminal Body */}
        <div className="space-y-5 font-mono text-xs">
          <div>
            <span className="text-text-muted">$ echo $DEVELOPER_ADDRESS</span>
            <p className="mt-1 text-sm font-sans font-semibold text-text-main pl-4 border-l-2 border-border-line">
              Addis Ababa, Ethiopia
            </p>
          </div>

          <div>
            <span className="text-text-muted">
              $ cat routing_endpoints.json
            </span>
            <div className="mt-2 rounded-lg bg-bg-app border border-border-line p-4 space-y-2 text-[11px] text-text-muted transition-colors">
              <div className="flex justify-between items-center py-1 border-b border-border-line/40">
                <span className="text-text-muted">email:</span>
                <a
                  href="mailto:sams1307wolde@gmail.com"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-sans font-medium">
                  sams1307wolde@gmail.com
                </a>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border-line/40">
                <span className="text-text-muted">github:</span>
                <a
                  href="https://github.com/samson08sis"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  github.com/samson08sis
                </a>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-text-muted">linkedin:</span>
                <a
                  href="https://www.linkedin.com/in/samson-sisay/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  linkedin.com/in/samsonsisay
                </a>
              </div>
            </div>
          </div>

          {/* Call To Action Button */}
          <div className="pt-2 text-center sm:text-left">
            <a
              href="mailto:sams1307wolde@gmail.com"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-150">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
