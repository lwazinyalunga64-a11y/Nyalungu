import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { email, name } = req.body;
    const origin = req.headers.origin || 'https://goalgetaway-mvp.vercel.app';

    const merchant_id = '33483003';
    const merchant_key = 'g2jugnm7387te';
    const passphrase = process.env.PAYFAST_PASSPHRASE || '';

    // PayFast parameters
    const data = {
      merchant_id,
      merchant_key,
      amount: '19.00',
      item_name: 'GoalGetaway Premium',
      return_url: `${origin}/premium?success=true`,
      cancel_url: `${origin}/premium?canceled=true`,
      email_address: email,
      name_first: name || 'Valued Fan',
    };

    // Construct parameter string for signature
    // Fields must be in the correct order for PayFast signature
    // Common order: merchant_id, merchant_key, return_url, cancel_url, notify_url, name_first, name_last, email_address, m_payment_id, amount, item_name, item_description, custom_int1, custom_str1, email_confirmation, confirmation_address, payment_method, signature
    
    let pfParamString = '';
    for (let key in data) {
      if (data[key] !== '') {
        pfParamString += `${key}=${encodeURIComponent(data[key]).replace(/%20/g, '+')}&`;
      }
    }

    // Remove last ampersand
    let signatureString = pfParamString.substring(0, pfParamString.length - 1);
    if (passphrase !== '') {
      signatureString += `&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`;
    }

    const signature = crypto.createHash('md5').update(signatureString).digest('hex');
    
    // Return the URL for the frontend to redirect
    const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${pfParamString}signature=${signature}`;
    
    res.status(200).json({ url: payfastUrl });
  } catch (err) {
    console.error('PayFast error:', err);
    res.status(500).json({ error: err.message });
  }
}
