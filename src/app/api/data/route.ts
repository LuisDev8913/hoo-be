import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(_: Request) {
  const jsonDirectory = path.join(process.cwd(), 'public');

  const fileContents = await fs.readFile(jsonDirectory + '/pageData.json', 'utf8');

  return NextResponse.json(JSON.parse(fileContents));
}
