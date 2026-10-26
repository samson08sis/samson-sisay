import { Contact } from "@/types";
import Link from "next/link";

interface Props {
  contact: Contact;
}

export default function ContactMe({ contact }: Props) {
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
              {contact.address}
            </p>
          </div>

          <div>
            <span className="text-text-muted">
              $ cat routing_endpoints.json
            </span>
            <div className="mt-2 rounded-lg bg-bg-app border border-border-line p-4 space-y-2 text-[11px] text-text-muted transition-colors">
              <div className="flex justify-between items-center py-1 border-b border-border-line/40">
                <span className="text-text-muted">email:</span>
                <Link
                  href={`"mailto:${contact.email}`}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-sans font-medium">
                  {contact.email}
                </Link>
              </div>
              {contact.github && (
                <div className="flex justify-between items-center py-1 border-b border-border-line/40">
                  <span className="text-text-muted">github:</span>
                  <Link
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {contact.github.slice(8)}
                  </Link>
                </div>
              )}
              {contact.linkedin && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-text-muted">linkedin:</span>
                  <Link
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-main hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    {contact.linkedin.slice(12)}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Call To Action Button */}
          <div className="pt-2 text-center sm:text-left">
            <Link
              href={`"mailto:${contact.email}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-150">
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
