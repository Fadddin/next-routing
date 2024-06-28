import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const numId = parseInt(id, 10)
  
  if (isNaN(numId)) {
    return NextResponse.json({ error: 'ID must be a number' }, { status: 400 })
  }

  const doubleValue = numId * 2

  return NextResponse.json({ result: doubleValue })
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}