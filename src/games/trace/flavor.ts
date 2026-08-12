// Flavor copy for the TRACE terminal. Three registers: SITREP (loud incident
// reports), DEVLOG (dry internal notes), and TRACEBACK (what the defender's
// counter-trace whispers once you're made). Picks are deterministic per seed so
// a replayed board reads the same.

export const SITREP: string[] = [
  'SSH compromised — unauthorized root on bastion host',
  'credentials obtained — admin hashes dumped from DC',
  'npm package contaminated — malicious dep in build pipeline',
  'DNS hijack — internal queries to attacker resolver',
  'database exfiltrated — records copied to external IP',
  'lateral movement — pivot from workstation to prod',
  'backdoor established — persistent shell on critical asset',
  'firewall rules modified — inbound restrictions lowered',
  'ransomware detected — encryption in progress on shares',
  'logs tampered with — security events wiped from SIEM',
  'kerberos ticket forged — golden ticket minted',
  'privilege escalated — service account now domain admin',
  'cloud keys leaked — S3 buckets set world-readable',
  'MFA bypassed — session token replayed from proxy',
  'C2 beacon live — implant checking in every 30s',
];

export const DEVLOG: string[] = [
  'DevLog: npm audit flags high-severity vuln in transitive dep',
  'DevLog: CI pipeline pulling from untrusted registry',
  'DevLog: SSH key rotation overdue — legacy keys still active',
  'DevLog: hardcoded secrets found in public repo',
  'DevLog: container image signed by unknown publisher',
  'DevLog: API keys exposed in client-side JavaScript',
  'DevLog: anomalous traffic spike from dev environment',
  'DevLog: failed logins from unusual geolocation',
  'DevLog: dependency confusion attack suspected',
  'DevLog: build artifacts modified post-compilation',
  'DevLog: staging DB reachable from public subnet',
  'DevLog: debug endpoint left enabled in prod',
  'DevLog: TLS cert expired — clients falling back to plaintext',
  'DevLog: verbose stack traces leaking to end users',
  'DevLog: cron job running as root with world-writable script',
];

// Written for this game: the defender's counter-trace, once you've tripped it.
export const TRACEBACK: string[] = [
  'TRACE INITIATED — diagnostic locking onto source',
  'back-trace in progress — reconstructing entry vector',
  'counter-intrusion daemon spawned at registry',
  'connection fingerprint matched — narrowing origin',
  'ICE deployed — crawling your captured nodes',
  'log correlation complete — they know your entry point',
  'signature broadcast upstream — origin resolving',
  'kill-switch arming at the entry node',
  'hop-by-hop trace closing on your address',
  'session token flagged — tracer following it home',
  'they are walking your path backward, node by node',
  'upstream provider subpoenaed — 40% to source',
];

// A tiny hashed PRNG so message choice is stable per board seed.
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic pick from `list` keyed by (seed, salt). */
export function pick(list: string[], seed: string, salt: number): string {
  return list[hash(`${seed}#${salt}`) % list.length]!;
}
